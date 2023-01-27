import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import type { Module } from "vuex";
import type { State } from "vue";

export type Area = "frontend" | "backend" | "career";

export interface Coach {
  id: string;
  firstName: string;
  lastName: string;
  areas: Area[];
  description: string;
  hourlyRate: number;
}

export interface CoachesState {
  coaches: Coach[];
}

const coachesModule: Module<CoachesState, State> = {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default coachesModule;
