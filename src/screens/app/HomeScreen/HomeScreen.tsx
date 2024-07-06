import React from "react";
import { Screen } from "@components";

import {
  Search,
  Offers,
  ServiceCategories,
  FeaturedServices
} from "./components";

export function HomeScreen() {
  return (
    <Screen scrollable>
      <Search />
      <Offers />
      <ServiceCategories />
      <FeaturedServices />
    </Screen>
  )
}