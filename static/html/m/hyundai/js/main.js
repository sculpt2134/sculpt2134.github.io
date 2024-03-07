(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

  document.querySelectorAll('.HCAU-tab-radio2 input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const tabName = this.value;
        document.querySelectorAll('.tab-radio-cont > div').forEach(div => {
            div.style.display = 'none';
        });
        document.querySelectorAll(`.${tabName}`).forEach(selectedDiv => {
            selectedDiv.style.display = 'block';
        });
        // console.log(tabName);
    });
  });
  document.querySelectorAll('.HCAU-tab-radio3 input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const tabName = this.value;
        document.querySelectorAll('.tab-radio-cont > div').forEach(div => {
            div.style.display = 'none';
        });
        document.querySelectorAll(`.${tabName}`).forEach(selectedDiv => {
            selectedDiv.style.display = 'block';
        });
        // console.log(tabName);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.native-scroll > div > button.active');
    const left = button.getBoundingClientRect().left;
    const nativeScroll = document.querySelector('.native-scroll');
    const curLeft = nativeScroll.scrollLeft;
    nativeScroll.scrollLeft = curLeft + left - 20;
  });
  const handleScroll = () => {
    const header = document.querySelector('header');
    if (window.scrollY >= 1) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
  };
  window.addEventListener('scroll', handleScroll);

  //const carousel = new bootstrap.Carousel('#MortorsPromo','#FinancePromo')