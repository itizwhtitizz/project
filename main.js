// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Consultation form (demo only)
function handleSubmit(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const msg = `상담 신청이 접수되었습니다.\n\n이름: ${data.name}\n연락처: ${data.phone}\n학년: ${data.grade}\n프로그램: ${data.program}\n\n실제 페이지에서는 서버로 전송됩니다.`;
  alert(msg);
  form.reset();
}
