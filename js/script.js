function hitungLuas() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;

  if (alas === "" || tinggi === "") {
    alert("Alas dan tinggi harus diisi");
    return;
  }

  const luas = alas * tinggi / 2;

  document.getElementById("hasil-luas").innerHTML = luas + " cm²";
}

function hitungKeliling() {
  const sisi1 = document.getElementById("sisi1").value;
  const sisi2 = document.getElementById("sisi2").value;
  const sisi3 = document.getElementById("sisi3").value;

  if (sisi1 === "" || sisi2 === "" || sisi3 === "") {
    alert("Semua sisi harus diisi");
    return;
  }

  const keliling = sisi1 + sisi2 + sisi3;

  document.getElementById("hasil-keliling").innerHTML = keliling + " cm";
}

document.getElementById("hitung-luas").addEventListener("click", hitungLuas);
document.getElementById("hitung-keliling").addEventListener("click", hitungKeliling);
