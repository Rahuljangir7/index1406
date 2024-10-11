import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ num }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const handleObserver = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.9, // Trigger when 90% of the component is in view
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = Math.ceil(num / 100); // Increment step based on the number
      const intervalId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + increment >= num) {
            clearInterval(intervalId);
            return num; // Set count to the final number
          }
          return prevCount + increment; // Increment the count
        });
      }, 50); // Update every 30ms

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [isVisible, num]); // Run counting effect when visible

  return (
    <div
      ref={ref}
      style={{
        border:"none",
      }}
    >
      {count}
    </div>
  );
};

export default Counter;
