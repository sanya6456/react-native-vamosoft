import React from "react";
import {
  View as NativeView,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Alarm from "../assets/icons/alarm";
import TaskCard from "../lib/components/task-card";
import customDate from "../lib/utils/custom-date";
import bgImage from "../../assets/circles.png";
import Text from "../lib/components/text";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../lib/graphql/queries";
import useDatesDifference from "../lib/hooks/use-dates-difference.hook";
import { styled } from "nativewind";

const View = styled(NativeView);

const Dashboard = ({ navigation }) => {
  const { data: projectsData } = useQuery(GET_PROJECTS, {
    variables: { limit: 10, skip: 0 },
  });
  const { getDays } = useDatesDifference();

  return (
    <View>
      <View className="p-4">
        <View className="flex flex-row items-center justify-between">
          <Text classes="text-gray text-xs">
            {customDate({ date: new Date(), order: "ds-ms-d-y" })}
          </Text>
          <Alarm className="w-5 h-5 text-purple" />
        </View>
        <View className="py-8">
          <Text classes="text-2xl" fontFamily="700">
            Welcome Phillip
          </Text>
          <Text classes="text-base">Have a nice day !</Text>
        </View>

        <SafeAreaView>
          <Text classes="text-xl mb-3" fontFamily="600">
            My Priority Task
          </Text>
          {projectsData && (
            <FlatList
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View className="w-3" />}
              horizontal
              data={projectsData.projectCollection.items}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TaskCard
                  onPush={() =>
                    navigation.navigate("DetailPriorityTask", {
                      name: item.name,
                      deadline: item.deadline,
                    })
                  }
                  imageUrl={bgImage}
                  period={getDays(item.deadline) + " days"}
                  classes={item.bgColor ?? "bg-blue-600"}
                >
                  <Text classes="text-white">{item.name}</Text>
                </TaskCard>
              )}
            />
          )}
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Dashboard;
