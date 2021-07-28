import { ROUTES } from 'utils/constants';

import { ReactComponent as DashboardIcon } from 'static/images/icons/dashboard.svg';
import { ReactComponent as  MyProfileIcon } from 'static/images/icons/my-profile.svg';
import { ReactComponent as MessagesIcon } from 'static/images/icons/messages.svg';
import { ReactComponent as  MusicIcon } from 'static/images/icons/music.svg';
import { ReactComponent as VideosIcon } from 'static/images/icons/videos.svg';
import { ReactComponent as WalletIcon } from 'static/images/icons/wallet.svg';
import { ReactComponent as TransactionIcon } from 'static/images/icons/transaction.svg';

const profileInfo = {
  title: 'Profile',
  links: [
    {
      label: 'My Profile',
      to: ROUTES.myProfile,
      Icon: MyProfileIcon,
    },
    {
      label: 'Dashboard',
      to: ROUTES.dashboard,
      Icon: DashboardIcon,
    },
  ],
};

const entertainmentInfo = {
  title: 'Pleasure',
  links: [
    {
      label: 'Messages',
      to: ROUTES.messages,
      Icon: MessagesIcon,
    },
    {
      label: 'Music',
      to: ROUTES.music,
      Icon: MusicIcon,
    },
    {
      label: 'Videos',
      to: ROUTES.videos,
      Icon: VideosIcon,
    },
  ],
};

const paymentInfo = {
  title: 'Payment',
  links: [
    {
      label: 'Wallets',
      to: ROUTES.wallets,
      Icon: WalletIcon,
    },
    {
      label: 'Transactions',
      to: ROUTES.transactions,
      Icon: TransactionIcon,
    },
  ],
};

const menuLinks = {
  profileInfo,
  entertainmentInfo,
  paymentInfo,
};

export default menuLinks;
