# 怎样修改chrome记住密码后自动填充表单的黄色背景

- 都提到了Chrome有默认样式，说“除了chrome默认定义的background-color，background-image，color不能用 !important 提升其优先级以外，其他的属性均可使用!important提升其优先级

```css
input:-webkit-autofill-strong-password {
    -webkit-text-security: none !important;
    -webkit-user-select: none !important;
    cursor: default !important;
    font-family: monospace;
}

input:-webkit-autofill, input:-webkit-autofill-strong-password {
    background-color: #FAFFBD !important;
    background-image: none !important;
    color: #000000 !important;
}
```

- 都加上了important，后面当然没办法重置啦，Chrome也是够横的