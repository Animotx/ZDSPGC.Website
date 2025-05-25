  let current = 1;
  const total = 4;

  setInterval(() => {
    document.getElementById(`slide${current}`).classList.add('hidden');
    current = current % total + 1;
    document.getElementById(`slide${current}`).classList.remove('hidden');
  }, 15000);