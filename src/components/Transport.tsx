import type React from "react";

import { motion } from "framer-motion";
import {
  Plane,
  Train,
  Bus,
  Clock,
  DollarSign,
  MapPin,
  ArrowRight,
  Navigation,
  CarTaxiFrontIcon as Taxi,
} from "lucide-react";

interface TransportOption {
  mode: string;
  icon: React.ElementType;
  routes: {
    steps: string[];
    duration: string;
    cost: [number, number];
  }[];
}

interface Airport {
  name: string;
  code: string;
  distance: string;
  transportOptions: TransportOption[];
}

const exchangeRate = 16000;

const airports: Airport[] = [
  {
    name: "Soekarno-Hatta International Airport",
    code: "CGK",
    distance: "85 km",
    transportOptions: [
      {
        mode: "Train",
        icon: Train,
        routes: [
          {
            steps: [
              "Take the Airport Train (CAT) to  Manggarai Station",
              "Transfer to Commuter Line at Manggarai Station",
              "Take the train towards Bogor",
              "Get off at Bogor Station",
              "Take a short ride (taxi/ojek) to IPB Convention Center",
            ],
            duration: "2.5 - 3 hours",
            cost: [70000, 100000],
          },
        ],
      },
      {
        mode: "Bus",
        icon: Bus,
        routes: [
          {
            steps: [
              "Take DAMRI bus from Airpot to Botani Square, Bogor",
              "Take a short steps to IPB Convention Center",
            ],
            duration: "3 - 4 hours",
            cost: [150000, 500000],
          },
        ],
      },
      {
        mode: "Taxi/Ride-hailing",
        icon: Taxi,
        routes: [
          {
            steps: [
              "Book a taxi or ride-hailing service (Grab, Gojek)",
              "Direct journey to IPB Convention Center",
            ],
            duration: "2 - 3 hours",
            cost: [400000, 600000],
          },
        ],
      },
    ],
  },
  {
    name: "Halim Perdanakusuma Airport",
    code: "HLP",
    distance: "65 km",
    transportOptions: [
      {
        mode: "Train",
        icon: Train,
        routes: [
          {
            steps: [
              "Take a taxi/ride-hailing to Jatinegara Station",
              "Take the Commuter Line towards Bogor",
              "Get off at Bogor Station",
              "Take a short ride (taxi/ojek) to IPB Convention Center",
            ],
            duration: "2 - 2.5 hours",
            cost: [50000, 80000],
          },
        ],
      },
      {
        mode: "Taxi/Ride-hailing",
        icon: Taxi,
        routes: [
          {
            steps: [
              "Book a taxi or ride-hailing service (Grab, Gojek)",
              "Direct journey to IPB Convention Center",
            ],
            duration: "1.5 - 2.5 hours",
            cost: [300000, 450000],
          },
        ],
      },
    ],
  },
];

export default function Transport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            How to Reach the Venue
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the best route to IPB Convention Center from Jakarta's major
            airports
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {airports.map((airport, airportIndex) => (
            <motion.div
              key={airport.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: airportIndex * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Airport Header */}
              <div className="bg-blue-950 text-white p-6">
                <div className="flex items-center gap-4">
                  <Plane className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">{airport.name}</h3>
                    <div className="flex items-center gap-4 mt-2 text-blue-100">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Distance: {airport.distance}
                      </span>
                      <span className="font-mono">{airport.code}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transport Options */}
              <div className="p-6 space-y-8">
                {airport.transportOptions.map((option, optionIndex) => {
                  const Icon = option.icon;
                  return (
                    <motion.div
                      key={option.mode}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: optionIndex * 0.1 + airportIndex * 0.2,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {option.mode}
                        </h4>
                      </div>

                      {option.routes.map((route, routeIndex) => (
                        <div key={routeIndex} className="ml-12 mb-6 last:mb-0">
                          {/* Steps */}
                          <div className="mb-4">
                            {route.steps.map((step, stepIndex) => (
                              <div
                                key={stepIndex}
                                className="flex items-start gap-3 mb-2"
                              >
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-sm font-medium text-blue-600">
                                    {stepIndex + 1}
                                  </span>
                                </div>
                                <span className="text-gray-600">{step}</span>
                              </div>
                            ))}
                          </div>

                          {/* Info */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-blue-600" />
                              Duration: {route.duration}
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-blue-600" />
                              Estimated Cost: Rp{" "}
                              {route.cost[0].toLocaleString()} - Rp{" "}
                              {route.cost[1].toLocaleString()}
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-blue-600" />
                              Estimated Cost: ${" "}
                              {(route.cost[0] / exchangeRate).toFixed(2)} - $
                              {(route.cost[1] / exchangeRate).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-blue-600" />
            Travel Tips
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2 animate-pulse">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-1 animate-pulse" />
              If asking locals, many refer to IPB Convention Center as Mall
              Botani Square (Botas).
            </li>
            <li className="flex items-start gap-2 animate-pulse">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-1 animate-pulse" />
              Don't forget to bring an umbrella or a raincoat—Bogor is known as
              the "Rain City" for a reason!
            </li>

            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-1" />
              Consider traffic conditions when planning your journey.
              Jakarta-Bogor traffic can be heavy during peak hours.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-1" />
              For train options, get a prepaid card (available at stations) for
              easier travel.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-1" />
              Popular ride-hailing apps in Indonesia include Gojek and Grab.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-1" />
              Keep small change handy for local transportation.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
