<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand float-left">QUẢN LÝ BẢNG DEADLINE</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/deadlines"
              >Danh sách deadline&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todos">Danh sách todo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
