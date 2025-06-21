import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGoalsViewModel } from '../viewmodel/useGoalsViewModel';

export const GoalsView = () => {
    const { } = useGoalsViewModel();

    return (
        <SafeAreaView>
            <Text>Goals</Text>
        </SafeAreaView>
    );
};
