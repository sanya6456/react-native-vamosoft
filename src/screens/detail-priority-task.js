import { useQuery } from "@apollo/client";
import { styled } from "nativewind";
import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  View as NativeView,
} from "react-native";
import CloseSquare from "../assets/icons/close-square";
import UIDesign from "../assets/icons/ui-design";
import DateCard from "../lib/components/date-card";
import Gap from "../lib/components/gap";
import ProgressBar from "../lib/components/progressbar";
import Task from "../lib/components/task";
import Text from "../lib/components/text";
import { GET_TASKS } from "../lib/graphql/queries";
import useDeadlineCalculator from "../lib/hooks/use-deadline-calculator.hook";
import customDate from "../lib/utils/custom-date";

const View = styled(NativeView);

const DetailPriorityTask = ({ navigation, route }) => {
  const { name, deadline } = route.params;

  const { data: tasks } = useQuery(GET_TASKS);
  const { getDays, getHours, getMonths } = useDeadlineCalculator();

  const titleClasses = "text-sm pb-1";
  const titleFont = "500";
  const sectionClasses = "pb-6";

  return (
    <ScrollView className="p-4">
      <View className="flex flex-row justify-between mb-6">
        <View className="flex flex-row">
          <UIDesign className="w-7 h-7 shrink-0 mr-3 text-blue-600 mt-0.5" />
          <Text fontFamily="700" classes="text-blue-600 text-3xl">
            {name}
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Dashboard")}>
          <CloseSquare className="w-8 h-8 text-blue-600" />
        </Pressable>
      </View>

      <View className="flex flex-row justify-between mb-6">
        <View>
          <Text classes="text-sm" fontFamily={titleFont}>
            start
          </Text>
          <Text classes="text-xs">
            {customDate({ date: new Date(), order: "d-ms-y" })}
          </Text>
        </View>
        <View>
          <Text classes="text-sm" fontFamily={titleFont}>
            end
          </Text>
          <Text classes="text-xs">
            {customDate({ date: new Date(deadline), order: "d-ms-y" })}
          </Text>
        </View>
      </View>

      <View className={`${sectionClasses} flex flex-row justify-between`}>
        <DateCard type="months">{getMonths(deadline)}</DateCard>
        <Gap />
        <DateCard type="days">{getDays(deadline)}</DateCard>
        <Gap />
        <DateCard type="hours">{getHours(deadline)}</DateCard>
      </View>

      <View className={sectionClasses}>
        <Text classes={titleClasses} fontFamily={titleFont}>
          Description
        </Text>
        <Text classes="text-xs">
          user interface (UI) is anything a user may interact with to use a
          digital product or service. This includes everything from screens and
          touchscreens, keyboards, sounds, and even lights. To understand the
          evolution of UI, however, it’s helpful to learn a bit more about its
          history and how it has evolved into best practices and a profession.
        </Text>
      </View>

      <View className={sectionClasses}>
        <Text classes={titleClasses} fontFamily={titleFont}>
          Progress
        </Text>
        <ProgressBar
          showPercentText
          percent={80}
          bgColorClass="bg-gray-800"
          activeColorClass="bg-blue-600"
          height="h-5"
        />
      </View>

      <View className={sectionClasses}>
        <Text classes={titleClasses} fontFamily={titleFont}>
          To do List
        </Text>
        {!!tasks && (
          <SafeAreaView>
            <FlatList
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View className="h-3" />}
              keyExtractor={(item) => item.name}
              data={tasks.taskCollection.items}
              renderItem={({ item }) => <Task name={item.name} />}
            />
          </SafeAreaView>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailPriorityTask;
