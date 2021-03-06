const component6: HTMLElement | null = document.getElementById('comp6');
const component5: HTMLElement | null = document.getElementById('comp5');
const component3: HTMLElement | null = document.getElementById('comp3');
const component2: HTMLElement | null = document.getElementById('comp2');
const component: HTMLElement | null = document.getElementById('comp');
const component1 = document.getElementById('comp1')!;
const component4 = document.getElementById('comp4')!;
const showMore = document.getElementById('show-more')!;

const comp1Drop = document.getElementById('comp1-drop')!;
const comp4Drop = document.getElementById('comp4-drop')!;
const dropAdds = document.getElementById('drop-adds')!;

const dropDown = document.getElementsByClassName('dropdown')
const mainMenu = document.getElementById('main-menu')!;
const font2 = document.getElementById('font-second')!
const background = document.getElementById('background')!;
const buttonShowMore = document.getElementById('button-show-more')!;

let arrayComponents: any[] = []
arrayComponents.push(component6, component5, component4, component3, component2, component1, component)
let arrayRemove: any[] = []

// checking last width check
let lastX: number = window.innerWidth

// trigger when changing window size to smaller
function checkSpaceSmaller(comp1: HTMLElement) {
    showMore.style.display = "block";
    dropAdds.insertAdjacentElement('afterbegin', comp1)
    comp1.classList.add('dd-show-more')
    if (comp1 === component4) {
        comp4Drop.style.opacity = "1";
        comp4Drop.classList.remove("fade-out-top")
    }
    else if (comp1 === component1) {
        comp1Drop.style.opacity = "1";
        comp1Drop.classList.remove("fade-out-top")
    }
    arrayRemove.push(arrayComponents.shift())
    lastX = window.innerWidth
}

// trigger when changing window size to larger
function checkSpaceBigger(comp1: HTMLElement, comp2: HTMLElement) {
    const postSpace: number = window.innerWidth - comp2.offsetLeft
    if (postSpace >= 250) {
        mainMenu.insertBefore(comp1, showMore)
        comp1.classList.remove('dd-show-more')
        arrayComponents.unshift(arrayRemove.pop())
        lastX = window.innerWidth
        if (dropAdds.childElementCount < 1) {
            showMore.style.display = "none";
        }
    }
    if (comp1 === component4) {
        comp4Drop.style.opacity = "0";
    }
    if (comp1 === component1) {
        comp1Drop.style.opacity = "0";
    }
}

// picking the right function depends on window size changes
function nextMove() {
    // to compare if changing to larger or smaller screen
    let currentWindowWidth: number = window.innerWidth
    if (currentWindowWidth > 1200) {
        return
    }
    else if (currentWindowWidth <= lastX) {
        while (arrayComponents.length > 1) {
            let currentComp: HTMLElement = arrayComponents[0]
            const space: number = window.innerWidth - currentComp.offsetLeft
            if (space < 270) {
                checkSpaceSmaller(currentComp)
            } else {
                break
            }
        }
    }
    else if (currentWindowWidth > lastX) {
        if (arrayRemove.length > 0) {
            let len: number = arrayRemove.length - 1
            let toDisplay: HTMLElement = arrayRemove[len]
            let displayedComp: HTMLElement = arrayComponents[0]
            checkSpaceBigger(toDisplay, displayedComp)
        }
    }
}

// eventListner for fade animation
function addMouseEvents(component: HTMLElement, drop: HTMLElement) {
    component.addEventListener('mouseenter', e => {
        if (arrayComponents.indexOf(component) > -1) {
            drop.classList.remove("fade-out-top")
            drop.classList.add("fade-in-top")
        }
        else {
            drop.style.opacity = "1";
        }
    })
    component.addEventListener('mouseleave', e => {
        if (arrayComponents.indexOf(component) > -1) {
            drop.classList.remove("fade-in-top")
            drop.classList.add("fade-out-top")
        }
        else {
            drop.style.opacity = "1";
        }
    })
}

addMouseEvents(component1, comp1Drop)
addMouseEvents(component4, comp4Drop)

showMore.addEventListener('mouseenter', e => {
    dropAdds.classList.remove("fade-out-top")
    dropAdds.classList.add("fade-in-top")
})
showMore.addEventListener('mouseleave', e => {
    dropAdds.classList.remove("fade-in-top")
    dropAdds.classList.add("fade-out-top")
})

// checking if mobile 
let isMobile: boolean = false;
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}
let isClicked: boolean = false
// if mobile true, adding all children to show-more component
if (isMobile) {
    for (let i = 0; i < arrayComponents.length; i++) {
        showMore.style.display = "block";
        dropAdds.appendChild(arrayComponents[i])
        arrayComponents[i].classList.add('dd-show-more')
    }
    dropAdds.classList.remove("fade-in-top", "fade-out-top")
    comp1Drop.classList.remove("fade-in-top", "fade-out-top")
    comp4Drop.classList.remove("fade-in-top", "fade-out-top")
    comp1Drop.style.opacity = "1";
    comp4Drop.style.opacity = "1";

    // eventListner for slide in/ out on mibile view
    showMore.addEventListener('click', e => {
        if (!isClicked) {
            dropAdds.classList.remove("slide-out-left");
            dropAdds.classList.add("slide-in-left");
            background.classList.add('background-visible');
            font2.classList.remove("fa-sort-amount-up-alt");
            font2.classList.add("fa-sort-amount-down-alt");
            isClicked = true
        }
        else {
            dropAdds.classList.remove("slide-in-left");
            dropAdds.classList.add("slide-out-left");
            background.classList.remove('background-visible');
            font2.classList.remove("fa-sort-amount-down-alt");
            font2.classList.add("fa-sort-amount-up-alt");
            isClicked = false
        }
    })
}

// eventListner for small arrow near Show More 
showMore.addEventListener('mouseenter', e => {
    font2.classList.remove("fa-sort-amount-up-alt")
    font2.classList.add("fa-sort-amount-down-alt")
})
showMore.addEventListener('mouseleave', e => {
    font2.classList.remove("fa-sort-amount-down-alt")
    font2.classList.add("fa-sort-amount-up-alt")
})

// detection of window size changes
window.onresize = nextMove

// for start 
window.document.onreadystatechange = nextMove