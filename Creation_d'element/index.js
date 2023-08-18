// creation d'element li
function insererLiNode(textInserer) {
  const liNode = document.createElement('li');
  const text = document.createTextNode(textInserer);

  liNode.append(text);
  list.append(liNode);
  console.log(liNode);
}

insererLiNode('html');
insererLiNode('css');
insererLiNode('javascript');
insererLiNode('python');
