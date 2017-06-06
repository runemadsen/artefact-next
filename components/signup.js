import React from 'react'

export default () => (
  <div>
    <form accept-charset="UTF-8" action="/users" autocomplete="off" method="post">
      <input type="text" name="user[username]" placeholder="Pick a username" />
      <br />
      <input type="email" name="user[email]" placeholder="Your email address" />
      <br />
      <input type="password" name="user[password]" placeholder="Create a password" />
      <br />
      <button type="submit">Sign up for Artefact</button>
    </form>
  </div>
)
