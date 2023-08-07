import { ProfileWidget } from './components/ProfileWidget';
import { MyEventsTab } from './components/MyEventsTab';
import { ProfileTab } from './components/ProfileTab';
import { AccountSettingsTab } from './components/AccountSettingsTab';
import { TabMenu } from './components/TabMenu';
import { ProfileAd } from './components/ProfileAd';

export default function MyProfilePage() {
  return (
    <div>
      <section className="py-4 bg-light inner-header border-bottom">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="mt-0 mb-0 text-dark">My Account</h4>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <div className="breadcrumbs">
                <p className="mb-0">
                  <a href="#">
                    <i className="icofont-ui-home" /> Home
                  </a>{' '}
                  / <span>My Account</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-5 mb-4 pb-2 list-bp">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <ProfileWidget />
            <TabMenu />
            <ProfileAd />
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <div className="tab-content" id="myTabContent">
                <ProfileTab />
                <MyEventsTab />
                <AccountSettingsTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
