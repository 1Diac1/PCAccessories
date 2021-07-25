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
          <a class='donthaveacc' href="signup.php">Не имеете аккаунт?</a>
        </form>
      </div>
    </div>
  </div>
</div>

<?php 
    include('footer.php')
?>