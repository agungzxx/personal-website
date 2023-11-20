import confetti from "canvas-confetti";
import Typed from 'typed.js';

document.getElementById("yeay").addEventListener("click", () => {
    confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      })
})



new Typed('#element', {
  strings: ['<h2>"Konsisten akan membawamu pada tujuan."</h2>', '<h2>"Menjadi konsisten adalah kunci sukses."</h2>'],
  typeSpeed: 30,
  loop: true,
});