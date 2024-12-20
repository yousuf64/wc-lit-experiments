import taskConfig from "./check-list-config.json";

const container = document.getElementById('host');
const checklistComponent = document.createElement('check-list');
checklistComponent.headerTitle = "Checklist title"
checklistComponent.headerDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum odit quaerat aspernatur illum enim quo aut. Consequuntur at nesciunt accusantium nemo maiores. Provident exercitationem sint maiores, iure sed voluptas quibusdam!"
checklistComponent.tasks = taskConfig;

checklistComponent.addEventListener("primary-button-" + 1, (e: Event) => {
  alert(JSON.stringify((e as CustomEvent).detail))
});

checklistComponent.addEventListener("secondary-button-" + 1, (e: Event) => {
    alert("Secondary" + JSON.stringify((e as CustomEvent).detail))
});  

container?.appendChild(checklistComponent);

const modalButton = document.getElementById("modal-open");
modalButton?.addEventListener("click", async() => {
  checklistComponent.open = true;          
});