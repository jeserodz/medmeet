export function TabMenu() {
  return (
    <div className="bg-white p-3 widget shadow rounded mb-4">
      <div
        className="nav nav-pills flex-column lavalamp"
        id="sidebar-1"
        role="tablist"
      >
        <a
          className="nav-link active"
          data-toggle="tab"
          href="#sidebar-1-1"
          role="tab"
          aria-controls="sidebar-1"
          aria-selected="true"
        >
          <i className="fas fa-user-circle fa-sm fa-fw mr-2 ri" /> Profile
        </a>
        <a
          className="nav-link"
          data-toggle="tab"
          href="#sidebar-1-2"
          role="tab"
          aria-controls="sidebar-1-2"
          aria-selected="false"
        >
          <i className="fas fa-list-alt fa-sm fa-fw mr-2 ri" /> My Events
        </a>
        <a
          className="nav-link"
          data-toggle="tab"
          href="#sidebar-1-4"
          role="tab"
          aria-controls="sidebar-1-4"
          aria-selected="false"
        >
          <i className="fas fa-cog fa-sm fa-fw mr-2 ri" /> Account Settings
        </a>
      </div>
    </div>
  );
}
