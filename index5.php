<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    

<div id="root">
    <div>
        {{message}}
        <progress-view inline-template>
            <div>
                Downloading progress:
                <progress v-bind:value="percent" @add="" max="100"></progress>
                <button @click="increaseSpeed">Increase speed</button>
            </div> 
        </progress-view>
    </div>
</div>

<script src="vue5.js"></script>
</body>
</html>



