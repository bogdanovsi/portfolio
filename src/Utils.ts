
export function assign(p_obj, p_defaultObj): any {
  if(!p_obj) return {};

    let obj = {};

    for (let key in p_defaultObj) {
      if (!p_obj.hasOwnProperty(key)) {
        obj[key] = p_defaultObj[key];
      } else if (typeof p_obj[key] === "object") {
        obj[key] = assign(p_obj[key], p_defaultObj[key]);
      } else {
        obj[key] = p_obj[key];
      }
    }

    return obj;
}

export function getCoords(elem: Element) {
  const box = elem.getBoundingClientRect() as DOMRect;
  return {
    top: box.top,
    bottom: box.bottom,
    screenHeight: document.documentElement.clientHeight,
    height: box.height,
    // relativeDocumentTop: box.top + window.pageYOffset || document.documentElement.scrollTop,
    // left: box.left,
    // relativeDocumentLeft: box.left + window.pageXOffset || document.documentElement.scrollLeft,
    // right: box.right,
    // width: box.width,
    // x: box.x || box.left,
    // y: box.y || box.top
  };
}

export function isPlaying(video: HTMLVideoElement) {
  return video.currentTime > 0 && !video.paused && !video.ended 
        && video.readyState > 2;
}
