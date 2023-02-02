import { createContext, useState } from "react";
import Calendar from "./components/calendar/Calendar";
import CalendarSkeleton from "./components/calendar/CalendarSkeleton";
import Header from "./components/header/Header";

export const dataContext = createContext();
const data = {
  date:{
    year: "1401",
    month: "اذر"
  } ,
  itemsData: {
    0: {
      day: "قبلی",
      isCurrent: false,
      dayWord: "",
      activeTask: false,
    },
    12: {
      day: 12,
      isCurrent: true,
      dayWord: "د",
      activeTask: true,
      tasks: {
        5456467657575757: {
          id: "5456467657575757",
          task: "تعمیر اتو",
          time: "12:45",
          userInfo: {
            name: "علی اخوان",
            phoneNumber: 9227195585,
            address:
              "چهارراه فلسطین ، خیابان فردوسی ، نبش خیابان فلسطین ، کوچه مجاهد ، پلاک 13",
          },
          progress: 56,
          payment: {
            paymentMethod: "هزینه را نقدی دریافت کنید",
            amount: "700000",
            bill: [
              {
                title: "حضور ومشاوره تخصصی",
                amount: 44000,
              },
              {
                title: "ایاب و ذهاب",
                amount: 20000,
              },
              {
                title: "عوارض و مالیات",
                amount: 6000,
              },
            ],
          },
          details: {
            general: [
              {
                title: "کد سفارش",
                value: 2424534536636,
              },
              {
                title: "زمان اعزام متخصص",
                value: "فوری",
              },
              {
                title: "نوع خدمت",
                value: "تعمیر",
              },
              {
                title: "نوع یخچال و فریزر",
                value: "دوقلو",
              },
              {
                title: "برند یخچال و فریزر",
                value: "سامسونگ",
              },
            ],
            problems: {
              title: "مشکل یخچال فریزر",
              values: [
                "موتور یخچال کار نمیکند",
                "صدای یخچال غیر عادی و زیاد است",
              ],
            },
            description:
              "ینجا توضیحات کاربر درمورد صفارش تعمیرات نوشته میشود  اینجا توضیحات کاربر درمورد صفارش تعمیرات نوشته میشود",
          },
        },
        64676356347345: {
          id: "64676356347345",
          task: "تعمیر سشوار",
          time: "16:00",
          userInfo: {
            name: "علی اخوان",
            phoneNumber: 9227195585,
            address:
              "چهارراه فلسطین ، خیابان فردوسی ، نبش خیابان فلسطین ، کوچه مجاهد ، پلاک 13",
          },
          progress: 56,
          payment: {
            paymentMethod: "هزینه را نقدی دریافت کنید",
            amount: "700000",
            bill: [
              {
                id: "4324",
                title: "حضور ومشاوره تخصصی",
                amount: 44000,
              },
              {
                id: "4323354",
                title: "ایاب و ذهاب",
                amount: 20000,
              },
              {
                id: "4345624",
                title: "عوارض و مالیات",
                amount: 6000,
              },
            ],
          },
          details: {
            general: [
              {
                title: "کد سفارش",
                value: 2424534536636,
              },
              {
                title: "زمان اعزام متخصص",
                value: "فوری",
              },
              {
                title: "نوع خدمت",
                value: "تعمیر",
              },
              {
                title: "نوع یخچال و فریزر",
                value: "دوقلو",
              },
              {
                title: "برند یخچال و فریزر",
                value: "سامسونگ",
              },
            ],
            problems: {
              title: "مشکل یخچال فریزر",
              values: [
                "موتور یخچال کار نمیکند",
                "صدای یخچال غیر عادی و زیاد است",
              ],
            },
            description:
              "ینجا توضیحات کاربر درمورد صفارش تعمیرات نوشته میشود  اینجا توضیحات کاربر درمورد صفارش تعمیرات نوشته میشود",
          },
        },
        354456464757534: {
          id: "354456464757534",
          task: "تعمیر ابمیوه گیری",
          time: "20:00",
          userInfo: {
            name: "علی اخوان",
            phoneNumber: 9227195585,
            address:
              "چهارراه فلسطین ، خیابان فردوسی ، نبش خیابان فلسطین ، کوچه مجاهد ، پلاک 13",
          },
          progress: 56,
          payment: {
            paymentMethod: "هزینه به صورت انلاین پرداخت شده",
            amount: "700000",
            bill: [
              {
                title: "حضور ومشاوره تخصصی",
                amount: 44000,
              },
              {
                title: "ایاب و ذهاب",
                amount: 20000,
              },
              {
                title: "عوارض و مالیات",
                amount: 6000,
              },
            ],
          },
          details: {
            general: [
              {
                title: "کد سفارش",
                value: 2424534536636,
              },
              {
                title: "زمان اعزام متخصص",
                value: "فوری",
              },
              {
                title: "نوع خدمت",
                value: "تعمیر",
              },
              {
                title: "نوع یخچال و فریزر",
                value: "دوقلو",
              },
              {
                title: "برند یخچال و فریزر",
                value: "سامسونگ",
              },
            ],
            problems: {
              title: "مشکل یخچال فریزر",
              values: [
                "موتور یخچال کار نمیکند",
                "صدای یخچال غیر عادی و زیاد است",
              ],
            },
            description:
              "ینجا توضیحات کاربر درمورد صفارش تعمیرات نوشته میشود  اینجا توضیحات کاربر درمورد صفارش تعمیرات نوشته میشود",
          },
        },
      },
    },
    13: {
      day: 13,
      isCurrent: false,
      dayWord: "س",
      activeTask: false,
    },
    14: {
      day: 14,
      isCurrent: false,
      dayWord: "چ",
      activeTask: false,
    },
    15: {
      day: 15,
      isCurrent: false,
      dayWord: "پ",
      activeTask: false,
    },
    16: {
      day: 16,
      isCurrent: false,
      dayWord: "ج",
      activeTask: false,
    },
    17: {
      day: 17,
      isCurrent: false,
      dayWord: "ش",
      activeTask: false,
    },
    18: {
      day: 18,
      isCurrent: false,
      dayWord: "ی",
      activeTask: false,
    },
  },
};
function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col px-5">
      <Header />
      {loading ? (
        <CalendarSkeleton />
      ) : (
        <dataContext.Provider value={data} >
          <Calendar />
        </dataContext.Provider>
      )}
    </div>
  );
}

export default App;
