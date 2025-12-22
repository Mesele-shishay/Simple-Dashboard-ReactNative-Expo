import React from 'react';
import HomeDashboard from '@/components/home-dashboard';

const dashboardConfig = {
  "screen": "HomeDashboard",
  "header": {
    "title": "HomeDashboard",
    "backgroundColor": "#FFC107",
    "textColor": "#FFFFFF"
  },
  "content": [
    {
      "row": [
        {
          "type": "card",
          "title": "Banking",
          "icon": "dollar-sign",
          "iconColor": "#673AB7",
          "description": "Check your bank activities"
        },
        {
          "type": "card",
          "title": "Ideas",
          "icon": "lightbulb",
          "iconColor": "#E91E63",
          "description": "Check your bank activities"
        }
      ]
    },
    {
      "row": [
        {
          "type": "card",
          "title": "Add",
          "icon": "plus-circle",
          "iconColor": "#009688",
          "description": "Check your bank activities"
        },
        {
          "type": "card",
          "title": "Links",
          "icon": "paperclip",
          "iconColor": "#FFC107",
          "description": "Check your bank activities"
        }
      ]
    },
    {
      "row": [
        {
          "type": "card",
          "title": "Add",
          "icon": "wifi",
          "iconColor": "#673AB7",
          "description": "Check your bank activities",
          "fullWidth": true
        }
      ]
    }
  ]
};

export default function HomeScreen() {
  return <HomeDashboard config={dashboardConfig} />;
}
