import './hero.css';
import Button from '../../utility/button/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
        <header>
        <h2>A taste of every lifestyle</h2>
        <Link to='/blogpage'>
        <Button className="btn-1" name="READ THE BLOG" />
        </Link>
        </header>
    </>
  )
}

export default Hero