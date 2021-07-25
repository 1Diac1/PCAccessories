<?php 
    include('header.php')
?>

<div class="row">
  <div class="col-lg-8 offset-lg-2">
    <div class="auth">
      <div class="sign_in">
        <form action="" method="post">
          <h1>Войти</h1>
          <input
            type="text"
            id="signLogin"
            placeholder="Логин"
            autocomplete="off"
            required
          />
          <input
            type="password"
            id="signPass"
            placeholder="Пароль"
            autocomplete="off"
            required
          />
          <a href="#">Забыли пароль?</a>
          <button
            id="signInButton"
            type="button"
            class="button1"
            onclick="signIn()"
          >
            Войти
          </button>
        </form>
      </div>
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
        </form>
      </div>
    </div>
  </div>
</div>