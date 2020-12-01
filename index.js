/**
 * 
 * @param {eleClassName} String: initial className of container
 * @param {activeClassName} String: the className you need to add if the container come into view 
 * @param {isOnceTime: true} Boolean: is once-time or not(every-time)
 */
function intoViewActivate ({eleClassName, activeClassName, isOnceTime = true}) {
    
    if (!eleClassName || !activeClassName) return

    let io = new IntersectionObserver( function (entris) {
        entris.forEach( entry => {
            // 若进入视野（intersectionRatio：目标元素的可见比例）
            if (entry.intersectionRatio > 0) {  
                let classString = entry.target.getAttribute('class')  
                if (classString.indexOf(activeClassName) < 0) {   
                    entry.target.classList.add(activeClassName)
                } 
            } else if (!isOnceTime){
                entry.target.classList.remove(activeClassName)
            }
        })
    })

    let eles = document.querySelectorAll(`.${eleClassName}`)
    eles.forEach( item => {
        io.observe(item)
    })
}