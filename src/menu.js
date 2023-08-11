import './menu.css';

export default (content) => {
    let p = document.createElement('p');
    p.innerText = 'Menu';
    let parser = new DOMParser();
    let doc = parser.parseFromString("<div><ul><div><li>Drinks</li><ul><div><li>Lemonade</li><p>$2.00</p></div><div><li>Milk</li><p>$2.00</p></div><div><li>Tea</li><p>$2.00</p></div><div><li>Coffee</li><p>$1.00</p></div><div><li>Juice</li><p>$2.00</p></div></ul></div><div><li>Entrees</li><ul><div><li>Pancakes</li><p>$7.50</p></div><div><li>French Toast</li><p>$5.00</p></div><div><li>Waffles</li><p>$7.50</p></div><div><li>Crepes</li><p>$7.50</p></div><div><li>Eggs & Hashbrowns</li><p>$10.00</p></div></ul></div><div><li>Dessert</li><ul><div><li>Milkshake</li><p>$4.00</p></div><div><li>Brownie</li><p>$3.00</p></div><div><li>Cake Slice</li><p>$4.00</p></div></ul></div></ul></div>", "text/html");
    let div = doc.body.firstChild;
    content.appendChild(p);
    content.appendChild(div);
}