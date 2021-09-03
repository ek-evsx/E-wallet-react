import { ROUTES } from 'utils/constants';

import { ReactComponent as DashboardIcon } from 'static/images/icons/dashboard.svg';
import { ReactComponent as  MyProfileIcon } from 'static/images/icons/my-profile.svg';
import { ReactComponent as MessagesIcon } from 'static/images/icons/messages.svg';
import { ReactComponent as WalletIcon } from 'static/images/icons/wallet.svg';

const menuLinks = [
  {
    label: 'Dashboard',
    to: ROUTES.dashboard,
    Icon: DashboardIcon,
  },
  {
    label: 'Messages',
    to: ROUTES.messages,
    Icon: MessagesIcon,
  },
  {
    label: 'Wallets',
    to: ROUTES.wallets,
    Icon: WalletIcon,
  },
  {
    label: 'My Profile',
    to: ROUTES.myProfile,
    Icon: MyProfileIcon,
  },
];

export default menuLinks;
