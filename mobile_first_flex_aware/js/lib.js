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
 * 
 *
 *
 */
function addClass(el, add_class)
{
    if (hasClass(el, add_class)) { return true; } 
    el.className += " " + add_class;
}


/**
 * 
 *
 *
 */
function remClass(el, rem_class)
{
    if (!hasClass(el, rem_class)) { return true; }
    var reg = new RegExp(" " + rem_class, 'g');
    el.className = el.className.replace(reg, "");
}
