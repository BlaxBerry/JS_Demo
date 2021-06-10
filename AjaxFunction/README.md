### Encapsulation Ajax
```js
// GET
ajax({
    method: 'GET',
    url: 'xxxxx',
    data: {
        key: value
    },
    success(res) {
        console.log(res);
    }
})

// POST
ajax({
    method: 'POST',
    url: 'xxxxx',
    data: {
        key: value,
        key:value
        ...
    },
    success(res) {
        console.log(res);
    }
})
```

```js

function ajax(option) {

    var xhr = new XMLHttpRequest();
    var query = resolveData(option.data);
    var method = option.method.toUpperCase();

    if (method === 'GET') {
        var url = option.url + '?' + query;
        xhr.open(method, url)
        xhr.send()

    } else if (method === 'POST') {

        xhr.open(method, option.url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(query)

    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var res = JSON.parse(xhr.responseText);
            option.success(res);
        }
    };
}

function resolveData(data) {
    var arr = [];
    for (let key in data) {
        arr.push(key + '=' + data[key]);
    }
    return arr.join("&");
}
```