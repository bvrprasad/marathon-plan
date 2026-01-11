# Marathon Plan 🏃‍♂️

A React Native mobile app for marathon training preparation, built with Expo Go. This app provides a comprehensive 12-week marathon training schedule for both iOS and Android platforms.

## Features

- 📅 12-week beginner marathon training plan
- 📱 Cross-platform support (iOS & Android)
- 🔄 Interactive week-by-week schedule
- 💪 Daily workout breakdown
- 🎯 Easy-to-follow training progression

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go app](https://expo.dev/client) on your iOS or Android device

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bvrprasad/marathon-plan.git
cd marathon-plan
```

2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

This will start the Expo development server and display a QR code in your terminal.

#### On iOS
- Install the [Expo Go](https://apps.apple.com/app/expo-go/id982107779) app from the App Store
- Open the Camera app and scan the QR code
- Tap the notification to open in Expo Go

#### On Android
- Install the [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) app from Google Play
- Open Expo Go and scan the QR code using the built-in scanner

### Alternative Run Commands

```bash
# Run on Android emulator/device
npm run android

# Run on iOS simulator (macOS only)
npm run ios

# Run in web browser
npm run web
```

## Project Structure

```
marathon-plan/
├── App.js              # Main application component with training plan
├── app.json            # Expo configuration
├── package.json        # Project dependencies
├── index.js            # Entry point
├── assets/             # Images and icons
└── README.md           # This file
```

## Training Plan Overview

The app includes a comprehensive 12-week marathon training program designed for beginners:

- **Weeks 1-4**: Base building (3-8 miles long runs)
- **Weeks 5-7**: Distance increase (10-14 miles long runs)
- **Weeks 8-10**: Peak training (16-18 miles long runs)
- **Weeks 11-12**: Taper and race week

Each week includes:
- Rest days for recovery
- Short runs for maintaining fitness
- Long runs for building endurance
- Optional cross-training days

## Technologies Used

- **React Native**: Mobile app framework
- **Expo**: Development platform for universal apps
- **JavaScript**: Programming language

## Development

To make changes to the app:

1. Edit `App.js` to modify the user interface or training plan
2. The app will automatically reload when you save changes
3. Test on both iOS and Android devices using Expo Go

## Tips for Marathon Training

- 💧 Stay hydrated during all runs
- 🎧 Listen to your body and rest when needed
- 👟 Invest in proper running shoes
- 🍎 Maintain a healthy diet
- 📈 Gradually increase your mileage
- 🏥 Consult a doctor before starting any training program

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or issues, please open an issue on GitHub.

---

Good luck with your marathon training! 🎉🏃‍♀️
