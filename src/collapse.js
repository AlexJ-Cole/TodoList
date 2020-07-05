export function collapseListener() {
  //get all collapsible elements
  const coll = document.getElementsByClassName('collapse');
  
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const content = getAllSiblings(this);
        content.forEach((li) => {
            if (li.style.display === 'none') {
                li.style.display = 'inline-block';
            } else {
                li.style.display = 'none';
            }
        })
    })
  }
}

export function collapseListenerProj() {
  const collP = document.getElementsByClassName('collapseProj');

  for (let i = 0; i < collP.length; i++) {
    collP[i].addEventListener('click', (e) => {
      e.target.classList.toggle('active');
      const content = e.target.nextElementSibling.nextElementSibling;
        if (content.style.display === 'none') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
    })
  }
}

function getAllSiblings(e) {
  let result = [];
  let node = e.parentNode.firstChild;
  
  while (node) {
      if (node !== e && node.nodeType === Node.ELEMENT_NODE) {
          result.push(node);
      }
      node = node.nextElementSibling || node.nextSibling;
  }
  return result;
}