function searchBar(){
    const magnifyingGlass = document.querySelector('.fa-magnifying-glass');
    magnifyingGlass.style.position = 'relative';

    console.log(magnifyingGlass);

    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'search';
    input.style.borderRadius = '4px';
    input.style.onlick = 'none';
    input.style.position = 'absolute';
    input.style.border = '1px solid gray';
    input.style.right = '0';
    
    console.log(input);
     // Insert the input field right after the magnifying glass icon
     magnifyingGlass.insertAdjacentElement('afterend', input);
    

}