<?php
    include('header.php')
?>

<div class="row">
  <div class="col-lg-8 offset-lg-2">
    <div class="auth">
      <div class="sign_up">
        <form action="" method="post">
          <h1>Создать аккаунт</h1>
          <input
            type="text"
            placeholder="Логин"
            id="username"
            autocomplete="off"
            required
          />
          <input
            type="email"
            placeholder="Почта"
            id="mail"
            autocomplete="off"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            id="password"
            autocomplete="off"
            required
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            id="confirmpassword"
            autocomplete="off"
            required
          />
          <button
            id="signUpButton"
            type="button"
            onclick="signUp()"
            class="button1"
          >
            Регистрация
          </button>
          <a class='donthaveacc' href="signin.php">Уже есть аккаунт?</a>
        </form>
      </div>
    </div>
  </div>
</div>

<?php 
    include('footer.php')
?>