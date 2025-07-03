// FAQ Data
const faqData = [
  {
    category: 'General Questions',
    questions: [
      {
        q: 'Presented own highly to in offers surprise of ear chair?',
        a: 'Create text automations and flows based on custom prebuild audiences. Capture abandon carts. You cannot spend 2 months',
      },
      {
        q: 'The even a the man, used to and surprised that at incentive?',
        a: 'Our platform adapts to your workflow and helps you achieve more with less effort.',
      },
      {
        q: 'Dishonourable mellower and we their visuals theoretically produce?',
        a: 'Yes, you can customize the visuals to match your brand guidelines and preferences.',
      },
      {
        q: 'For structure seeing to a room as his right in?',
        a: 'Our flexible structure allows you to organize your workspace as you see fit.',
      },
      {
        q: 'The clear my a of from the reey time how new times because that?',
        a: 'You can track changes and updates in real time, ensuring you never miss important information.',
      },
    ],
  },
  {
    category: 'Support team',
    questions: [
      {
        q: 'How do I contact the support team?',
        a: 'You can reach our support team via email or live chat 24/7.',
      },
      {
        q: 'What is the response time?',
        a: 'Our average response time is under 2 hours during business days.',
      },
    ],
  },
  {
    category: 'Miscellaneous',
    questions: [
      {
        q: 'Can I use the platform for free?',
        a: 'Yes, we offer a free trial for all new users.',
      },
      {
        q: 'Is my data secure?',
        a: 'We use industry-standard encryption and security practices to protect your data.',
      },
    ],
  },
  {
    category: 'Donsectetur',
    questions: [
      {
        q: 'What integrations are available?',
        a: 'We support integrations with popular tools like Slack, Zapier, and more.',
      },
    ],
  },
  {
    category: 'Gabitasse',
    questions: [
      {
        q: 'How do I upgrade my plan?',
        a: 'Go to your account settings and select the plan you wish to upgrade to.',
      },
    ],
  },
];

function initFaqHtmlFaq() {
  const categories = document.querySelectorAll('.faq-category');
  const questionsContainer = document.getElementById('faq-questions');
  if (!categories.length || !questionsContainer) return;

  let activeCategory = 0;
  let openQuestion = 0;

  function renderQuestions() {
    const { questions } = faqData[activeCategory];
    questionsContainer.innerHTML = '';
    if (openQuestion === null) {
      questions.forEach((item, idx) => {
        questionsContainer.innerHTML += `
          <button class="w-full bg-white/80 rounded-xl shadow-sm p-4 flex justify-between items-center text-left transition-all group hover:bg-white" data-idx="${idx}">
            <span class="font-medium text-gray-900">${item.q}</span>
            <span class="text-2xl text-gray-400 group-hover:text-gray-700 transition">+</span>
          </button>
        `;
      });
    } else {
      questions.forEach((item, idx) => {
        if (openQuestion === idx) {
          questionsContainer.innerHTML += `
            <div class="bg-white rounded-xl shadow-md p-4 mb-2">
              <div class="flex justify-between items-start">
                <div class="font-semibold text-gray-900 text-base">${item.q}</div>
                <button class="ml-4 text-gray-400 hover:text-gray-700 text-2xl font-bold close-faq" data-idx="${idx}">&times;</button>
              </div>
              <div class="text-gray-700 text-sm mt-2">${item.a}</div>
            </div>
          `;
        } else {
          questionsContainer.innerHTML += `
            <button class="w-full bg-white/80 rounded-xl shadow-sm p-4 flex justify-between items-center text-left transition-all group hover:bg-white" data-idx="${idx}">
              <span class="font-medium text-gray-900">${item.q}</span>
              <span class="text-2xl text-gray-400 group-hover:text-gray-700 transition">+</span>
            </button>
          `;
        }
      });
    }
  }

  function setActiveCategory(idx) {
    activeCategory = idx;
    openQuestion = 0;
    categories.forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
      btn.classList.toggle('bg-white', i === idx);
      btn.classList.toggle('shadow-md', i === idx);
      btn.classList.toggle('text-gray-900', i === idx);
      btn.classList.toggle('bg-white/80', i !== idx);
      btn.classList.toggle('text-gray-400', i !== idx);
      btn.classList.toggle('shadow-md', i === idx);
    });
    renderQuestions();
  }

  categories.forEach((btn, idx) => {
    btn.onclick = () => setActiveCategory(idx);
  });

  questionsContainer.onclick = (e) => {
    const btn = e.target.closest('button[data-idx]');
    if (btn) {
      openQuestion = Number(btn.dataset.idx);
      renderQuestions();
      return;
    }
    const closeBtn = e.target.closest('.close-faq');
    if (closeBtn) {
      openQuestion = null;
      renderQuestions();
    }
  };

  renderQuestions();
}

function initFeaturesTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  if (!tabBtns.length || !tabContents.length) return;
  function showTab(idx) {
    tabBtns.forEach((btn, i) => btn.classList.toggle('active', i === idx));
    tabContents.forEach((tab, i) => tab.classList.toggle('active', i === idx));
  }
  tabBtns.forEach((btn, idx) => {
    btn.onclick = () => showTab(idx);
  });
  showTab(0);
}

function initFaqAccordion() {
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.onclick = function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('svg');
      if (content.classList.contains('hidden')) {
        document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.accordion-toggle svg').forEach(i => i.classList.remove('rotate-180'));
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    };
  });
} 