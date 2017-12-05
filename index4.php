<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    
<div id="notifications">
    {{message}}
</div>

<div id="content">
    <div id="root">
        <coupon @coupon-was-applied="onCouponApplied"></coupon>
    <div v-if="coupon">coupon applied</div>
    </div>
</div>


<script src="vue3.js"></script>
<script src="vue4.js"></script>
</body>
</html>


