// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};


const load = e => {
  console.log(e)
  let modelViewerParameters = e.target
  console.log(modelViewerParameters)
  // let scene = modelViewerParameters[Object.getOwnPropertySymbols(modelViewerParameters).find(e => e.description === 'scene')]
  // let modelArray = scene.children[0].children[0].children[0].children

  // let outside = modelArray[0]
  // let interrior_1 = modelArray[1]
  // let interrior_2 = modelArray[2]
  // let portal_1 = modelArray[3]
  // let portal_2 = modelArray[4]
  // let venus = modelArray[5]
  // let david = modelArray[6]

  // outside.material.colorWrite = false
  // outside.material.side = 2
  // outside.renderOrder = 1


  // let materials = modelViewerParameters.model.materials
  // materials[2].setDoubleSided(false)
  // materials[1].pbrMetallicRoughness.setBaseColorFactor([0.4, 0.4, 0.8])
  // materials[3].pbrMetallicRoughness.setBaseColorFactor([0.05, 0.05, 0.05])
  // materials[4].pbrMetallicRoughness.setBaseColorFactor([1, 1, 1])
  // materials[5].pbrMetallicRoughness.setBaseColorFactor([0.7294, 0.5333, 0.0392])
  // materials[6].pbrMetallicRoughness.setBaseColorFactor([0.7294, 0.5333, 0.0392])
  // materials[5].pbrMetallicRoughness.setMetallicFactor(1)
  // materials[6].pbrMetallicRoughness.setMetallicFactor(1)
  // materials[5].pbrMetallicRoughness.setRoughnessFactor(0.3)
  // materials[6].pbrMetallicRoughness.setRoughnessFactor(0.3)

}


document.querySelector('model-viewer').addEventListener('progress', onProgress);
document.querySelector('model-viewer').addEventListener('load', load)