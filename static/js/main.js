function reportWindowSize() {
  let nodelist = document.querySelectorAll('details')
  let arr = Array.from(nodelist);
  let arrSlice = arr.slice(1);

  if (window.innerWidth > 501) {
	for (const node of arr) {
	  node.open = true
	  console.log('opening')
    }
  } else {
    for (const node of arrSlice) {
	  node.open = false
	  console.log('closing')
    }
  }
}

window.onresize = reportWindowSize
window.onload = reportWindowSize
