import { useState } from 'react';

export const useTodos = (todos, setTodos) => {
    const [tabValue, setTabValue] = useState("1");

    const clickDelete = ele => {
        const newTodos = todos.filter(todo => {
            return todo.title !== ele.title;
        });
        setTodos(newTodos);
    };

    const clickDone = ele => {
        const newTodos = todos.slice();
        const index = newTodos.findIndex((v) => v.title === ele.title);
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }

    const dateIsWhen = date => {
        const targetDate = new Date(date);
        const year = targetDate.getFullYear();
        const month = targetDate.getMonth() + 1;
        const day = targetDate.getDate();
        const targetStr = year + month + day;
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth() + 1;
        const todayDay = today.getDate();
        const todayDateStr = todayYear + todayMonth + todayDay;
        if (targetStr === todayDateStr) {
            return "today";
        } else if (year === todayYear) {
            if (month === todayMonth) {
                if (day > todayDay) {
                    return "future";
                } else {
                    return false;
                };
            } else {
                if (month > todayMonth) {
                    return "future";
                } else {
                    return false;
                };
            }
        } else {
            if (year > todayYear) {
                return "future";
            } else {
                return false;
            };
        };
    };

    const todaysTodos = todos.filter(todo => {
        return dateIsWhen(todo.deadline) === "today" && todo.done === false;
    });

    const futureTodos = todos.filter(todo => {
        return dateIsWhen(todo.deadline) === "future" && todo.done === false;
    });

    const doneTodos = todos.filter(todo => {
        return todo.done;
    });

    const overedTodos = todos.filter(todo => {
        return todo.done === false && !dateIsWhen(todo.deadline);
    });

    const targetTodosFnc = title => {
        if (title === "今日の") {
            return todaysTodos;
        } else if (title === "明日以降の") {
            return futureTodos;
        } else if (title === "完了した") {
            return doneTodos;
        } else if (title === "期限切れの") {
            return overedTodos;
        };
    };

    const getStringFromDate = date => {
 
        const year_str = date.getFullYear() + "年";
        const month_str = 1 + date.getMonth()　+ "月";
        const day_str = date.getDate() + "日";
        const hour_str = date.getHours() + "時";
        const minute_str = date.getMinutes() + "分";
        
        let format_str = 'YYYYMMDD hhmm';
        format_str = format_str.replace(/YYYY/g, year_str);
        format_str = format_str.replace(/MM/g, month_str);
        format_str = format_str.replace(/DD/g, day_str);
        format_str = format_str.replace(/hh/g, hour_str);
        format_str = format_str.replace(/mm/g, minute_str);
        
        return format_str;
    };

    return [targetTodosFnc, clickDelete, clickDone, tabValue, setTabValue, getStringFromDate];
};