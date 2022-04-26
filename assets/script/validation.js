$(document).ready(function() {
  const $contact = $('#contact-frame');
  const $name = $('#name');
  const $email = $('#email');
  const $message = $('#message');
  const $btn = $('#contact-btn');
  const $overlay = $('#overlay');
  const $alert = $('#alert');

  const $namePattern = /^[^-\s][a-zA-Z\u00C0-\u00ff\s'-]+$/;
  const $emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

  $btn.click(function() {
    let $valid = true;
    let $focus = '';

    if ($message.val() === '') {
      $valid = false;
      $focus += $message.focus();
    }

    if ($email.val() === '') {
      $valid = false;
      $focus += $email.focus();
    }

    if ($email.val() !== '') {
      if (!$emailPattern.test($email.val())) {
        $valid = false;
        $focus += $email.focus();
      }
    }

    if ($name.val() === '') {
      $valid = false;
      $focus += $name.focus();
    }

    if ($name.val() !== '') {
      if (!$namePattern.test($name.val())) {
        $valid = false;
        $focus += $name.focus();
      }
    }

    if ($valid) {
      // $.post('contact.php', $form.serialize(), function() {
      $contact.removeClass('isvisible');
      $overlay.removeClass('isvisible');
      $alert.addClass('isvisible');
      setTimeout(function() {
        $alert.removeClass('isvisible');
        $name.val('');
        $email.val('');
        $message.val('');
      }, 5500);
      // });
    } else {
      $focus;
    }
  });
});
