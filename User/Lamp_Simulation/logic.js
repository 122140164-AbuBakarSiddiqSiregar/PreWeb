function switch_lamp(key) {
    let toggleSwitch = document.getElementById(`toggleSwitch${key}`);
    let lampu = document.getElementById(`lampu_${key}`);
    let status = document.getElementById(`status_lamp_${key}`)

    // Periksa apakah toggle dalam keadaan ON atau OFF
    lampu.src = toggleSwitch.checked 
        ? "../../src/img/Lamp/0_lamp_ON_pix.png"
        : "../../src/img/Lamp/0_lamp_OFF_pix.png";

    
    status.innerHTML = toggleSwitch.checked
        ?"Lampu ke " + `${key}` + " hidup"
        :"Lampu ke " + `${key}` + " mati";
}
