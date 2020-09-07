const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const select4 = document.getElementById('select4');
const select5 = document.getElementById('select5');
const select6 = document.getElementById('select6');
const select7 = document.getElementById('select7');
const select8 = document.getElementById('select8');
const select9 = document.getElementById('select9');
const select10 = document.getElementById('select10');
const select11 = document.getElementById('select11');

function createSelect(select) {
  const selected = select.querySelector(".select-box__selected");
  const optionsContainer = select.querySelector(".select-box__options-container");
  const optionsList = select.querySelectorAll(".select-box__option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
  
  optionsList.forEach(elem => {
    elem.addEventListener("click", () => {
      selected.innerHTML = elem.querySelector(".select-box__label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
}

function createTags(tag) {
  const selected = tag.querySelector('.select-box__selected');
  const optionsContainer = tag.querySelector('.select-box__options-container');
  const optionsList = tag.querySelectorAll('.select-box__option');

  selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
  });

  optionsList.forEach(elem => {
    elem.addEventListener("click", () => {
      selected.innerHTML = elem.querySelector(".select-box__label").innerHTML;
      // optionsContainer.classList.remove("active");
    });
  })
}

createSelect(select1);
createSelect(select2);
createSelect(select3);
createSelect(select4);
createSelect(select5);
createTags(select6);
createTags(select7);
createSelect(select8);
createSelect(select9);
createSelect(select10);
createSelect(select11);

const sectionMaterialsKmEam = document.getElementById('section-materials-km-eam');
const sectionControlNationalProjects = document.getElementById('section-control-national-projects');
const extraMaterialKmEam = document.getElementById('extra-material-km-eam');
const extraControlNational = document.getElementById('extra-control-national');

sectionMaterialsKmEam.addEventListener('click', () => {
  extraMaterialKmEam.style.display = 'block';
});

sectionControlNationalProjects.addEventListener('click', () => {
  extraMaterialKmEam.style.display = 'block';
  extraControlNational.style.display = 'flex';
})