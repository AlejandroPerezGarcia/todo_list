const input = document.querySelector("input")
const btn1 = document.querySelector("#button-addon2")
const datos = document.querySelector("tbody")
const totaltareas = document.querySelector("#total")
const realizada = document.querySelector("#realizada")
const pendiente = document.querySelector("#pendiente")

const tareas = [
  { id: 1707457410703, name: "Bañarme", check: false },
  { id: 1707256984705, name: "Cocinar", check: false },
  { id: 1707498522360, name: "Caminata", check: false },
];

btn1.addEventListener("click", () => {
  const tarea = input.value
  tareas.push({ id: Date.now(), name: tarea, check: false })
  input.value = ""
  console.log(tareas)

  hecha()
  pintar()
  total()
})

const pintar = () => {
  let temple = ""
  for (const tarea of tareas) {
    temple += `<tr>
                    <th scope="row">${tarea.id}</th>
                    <td>${tarea.name}</td>
                    <td><input class="check" type="checkbox" id="check_${tarea.id}" ${tarea.check ? "checked" : ""}
                    onchange="check(${tarea.id}, this.checked)">
                    <label class="form-check-label" for="flexCheckDefault"></label></td>
                    <td><button type="button" onclick="borrar(${
                      tarea.id
                    })" class="btn btn-danger">X</button></td>
                    </tr>`
  }
  datos.innerHTML = temple
};

const borrar = (id) => {
  const index = tareas.findIndex((item) => item.id === id)
  tareas.splice(index, 1);
  hecha()
  total()
  pintar()
}

const total = () => {
  const contar = tareas.length;
  const temple = `Total: ${contar} `
  totaltareas.innerHTML = temple
  pintar()
}

const check = (id, checked) => {
  const index = tareas.findIndex((tarea) => tarea.id === id)
  if (index !== -1) {
    tareas[index].check = checked;
    hecha()
    pintar()
  }
}

const hecha = () => {
  const data = tareas.filter((item) => item.check === true)
  const data2 = tareas.filter((item) => item.check === false)
  const contar = data.length;
  const contar2 = data2.length;
  const templea = `Realizadas: ${contar} `
  const templeb = `Pendientes: ${contar2} `
  realizada.innerHTML = templea
  pendiente.innerHTML = templeb
}

hecha()
total()
pintar()
