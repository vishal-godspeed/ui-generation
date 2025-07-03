document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const labels = document.querySelectorAll('.sidebar-label');
  let mini = false;

  toggleBtn.addEventListener('click', function () {
    mini = !mini;
    if (mini) {
      sidebar.classList.remove('w-72');
      sidebar.classList.add('w-20');
      labels.forEach(label => label.classList.add('hidden'));
    } else {
      sidebar.classList.remove('w-20');
      sidebar.classList.add('w-72');
      labels.forEach(label => label.classList.remove('hidden'));
    }
  });
});
