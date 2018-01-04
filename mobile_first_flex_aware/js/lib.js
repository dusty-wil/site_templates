/**
 * shortcut for getElementById
 * @param el_id string
 * @return element or false if not found
 */ 
function gid(el_id)
{
    var el = document.getElementById(el_id);
    if (typeof(el) == "undefined") { 
        return false;
    }
    return el;
}

/**
 * determines if an el has a certain class
 * @param el html element object
 * @param find_class string the class to find
 */
function hasClass(el, find_class)
{
    var reg = new RegExp(find_class, 'g');
    return reg.test(el.className);
}


/**
 * adds a class to an element 
 * @param el the element to add the class to
 * @param add_class the class to add
 * @return boolean
 */
function addClass(el, add_class)
{
    if (hasClass(el, add_class)) { return false; } 
    el.className += " " + add_class;
    return true;
}


/**
 * removes a class from an element
 * @param el the element to remove the class from
 * @param rem_class the class to remove
 * @return boolean 
 */
function remClass(el, rem_class)
{
    if (!hasClass(el, rem_class)) { return false; }
    var reg = new RegExp(" " + rem_class, 'g');
    el.className = el.className.replace(reg, "");
    return true;
}
