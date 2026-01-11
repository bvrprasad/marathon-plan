import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

// Sample 12-week marathon training plan
const trainingPlan = [
  { week: 1, monday: 'Rest', tuesday: '3 mi run', wednesday: '4 mi run', thursday: 'Rest', friday: '3 mi run', saturday: '5 mi long run', sunday: 'Rest or cross-train' },
  { week: 2, monday: 'Rest', tuesday: '3 mi run', wednesday: '4 mi run', thursday: 'Rest', friday: '3 mi run', saturday: '6 mi long run', sunday: 'Rest or cross-train' },
  { week: 3, monday: 'Rest', tuesday: '3 mi run', wednesday: '5 mi run', thursday: 'Rest', friday: '3 mi run', saturday: '8 mi long run', sunday: 'Rest or cross-train' },
  { week: 4, monday: 'Rest', tuesday: '3 mi run', wednesday: '5 mi run', thursday: 'Rest', friday: '3 mi run', saturday: '6 mi long run', sunday: 'Rest or cross-train' },
  { week: 5, monday: 'Rest', tuesday: '4 mi run', wednesday: '6 mi run', thursday: 'Rest', friday: '4 mi run', saturday: '10 mi long run', sunday: 'Rest or cross-train' },
  { week: 6, monday: 'Rest', tuesday: '4 mi run', wednesday: '6 mi run', thursday: 'Rest', friday: '4 mi run', saturday: '12 mi long run', sunday: 'Rest or cross-train' },
  { week: 7, monday: 'Rest', tuesday: '4 mi run', wednesday: '7 mi run', thursday: 'Rest', friday: '4 mi run', saturday: '14 mi long run', sunday: 'Rest or cross-train' },
  { week: 8, monday: 'Rest', tuesday: '4 mi run', wednesday: '7 mi run', thursday: 'Rest', friday: '4 mi run', saturday: '10 mi long run', sunday: 'Rest or cross-train' },
  { week: 9, monday: 'Rest', tuesday: '5 mi run', wednesday: '8 mi run', thursday: 'Rest', friday: '5 mi run', saturday: '16 mi long run', sunday: 'Rest or cross-train' },
  { week: 10, monday: 'Rest', tuesday: '5 mi run', wednesday: '8 mi run', thursday: 'Rest', friday: '5 mi run', saturday: '18 mi long run', sunday: 'Rest or cross-train' },
  { week: 11, monday: 'Rest', tuesday: '4 mi run', wednesday: '6 mi run', thursday: 'Rest', friday: '4 mi run', saturday: '12 mi long run', sunday: 'Rest or cross-train' },
  { week: 12, monday: 'Rest', tuesday: '3 mi run', wednesday: '4 mi run', thursday: 'Rest', friday: '2 mi run', saturday: 'Rest', sunday: 'Marathon!' },
];

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleWeekPress = (week) => {
    setSelectedWeek(selectedWeek === week ? null : week);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marathon Training Plan</Text>
        <Text style={styles.headerSubtitle}>12-Week Beginner Program</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {trainingPlan.map((weekData) => (
          <View key={weekData.week} style={styles.weekContainer}>
            <TouchableOpacity 
              style={styles.weekHeader}
              onPress={() => handleWeekPress(weekData.week)}
            >
              <Text style={styles.weekTitle}>Week {weekData.week}</Text>
              <Text style={styles.expandIcon}>
                {selectedWeek === weekData.week ? '▼' : '▶'}
              </Text>
            </TouchableOpacity>
            
            {selectedWeek === weekData.week && (
              <View style={styles.weekDetails}>
                <View style={styles.dayRow}>
                  <Text style={styles.dayLabel}>Monday:</Text>
                  <Text style={styles.dayActivity}>{weekData.monday}</Text>
                </View>
                <View style={styles.dayRow}>
                  <Text style={styles.dayLabel}>Tuesday:</Text>
                  <Text style={styles.dayActivity}>{weekData.tuesday}</Text>
                </View>
                <View style={styles.dayRow}>
                  <Text style={styles.dayLabel}>Wednesday:</Text>
                  <Text style={styles.dayActivity}>{weekData.wednesday}</Text>
                </View>
                <View style={styles.dayRow}>
                  <Text style={styles.dayLabel}>Thursday:</Text>
                  <Text style={styles.dayActivity}>{weekData.thursday}</Text>
                </View>
                <View style={styles.dayRow}>
                  <Text style={styles.dayLabel}>Friday:</Text>
                  <Text style={styles.dayActivity}>{weekData.friday}</Text>
                </View>
                <View style={styles.dayRow}>
                  <Text style={styles.dayLabel}>Saturday:</Text>
                  <Text style={styles.dayActivity}>{weekData.saturday}</Text>
                </View>
                <View style={styles.dayRow}>
                  <Text style={styles.dayLabel}>Sunday:</Text>
                  <Text style={styles.dayActivity}>{weekData.sunday}</Text>
                </View>
              </View>
            )}
          </View>
        ))}
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 Tips: Stay hydrated, listen to your body, and rest when needed!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  weekContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  weekTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  expandIcon: {
    fontSize: 16,
    color: '#4CAF50',
  },
  weekDetails: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  dayRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dayLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    width: 100,
  },
  dayActivity: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  footer: {
    padding: 20,
    marginTop: 12,
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: '#fff3cd',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  footerText: {
    fontSize: 14,
    color: '#856404',
    lineHeight: 20,
  },
});
