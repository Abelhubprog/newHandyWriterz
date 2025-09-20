import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const recentActivities = [
    { user: 'Olivia Martin', action: 'commented on', target: 'The Future of AI', time: '1h ago', avatar: '/avatars/01.png' },
    { user: 'Jackson Lee', action: 'published a new post', target: 'Intro to Social Work', time: '2h ago', avatar: '/avatars/02.png' },
    { user: 'Isabella Nguyen', action: 'uploaded a new file', target: 'Child-Nursing-Diagram.png', time: '3h ago', avatar: '/avatars/03.png' },
    { user: 'William Kim', action: 'created a new user', target: 'Sophia Davis', time: '5h ago', avatar: '/avatars/04.png' },
    { user: 'Sofia Davis', action: 'updated her profile', target: '', time: '1d ago', avatar: '/avatars/05.png' },
];

const RecentActivity: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {recentActivities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <Avatar className="h-9 w-9">
              <AvatarImage src={activity.avatar} alt="Avatar" />
              <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                {activity.user}
                <span className="font-normal text-zinc-500 dark:text-zinc-400"> {activity.action} </span>
                {activity.target && <span className="font-semibold text-indigo-600 dark:text-indigo-400">{activity.target}</span>}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
