import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import InsightsIcon from '@mui/icons-material/Insights';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BackupIcon from '@mui/icons-material/Backup';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData=[
    {
        title: "ホーム",
        icon :<HomeIcon />,
        link: "/home",
    },
    {
        title: "メール",
        icon :<MailIcon />,
        link: "/mail",
    },
    {
        title: "アナリティクス",
        icon :<InsightsIcon />,
        link: "/analitics",
    },
    {
        title: "友達追加",
        icon :<PersonAddIcon />,
        link: "/freind",
    },
    {
        title: "お支払い設定",
        icon :<CreditCardIcon />,
        link: "/payment",
    },
    {
        title: "アップロード",
        icon :<BackupIcon />,
        link: "/upload",
    },
    {
        title: "詳細設定",
        icon :<SettingsIcon />,
        link: "/setting",
    },
]
