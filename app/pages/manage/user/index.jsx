export default props => (
  <div>
    <h1>Manage Profile</h1>
    <h2>
      <em>User ID:</em> <code>{props.url.query.id}</code>
    </h2>
  </div>
)
