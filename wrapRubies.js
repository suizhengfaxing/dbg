function wrapRubies() {
    // 获取所有具有 class="container-content" 的 div 元素
    var containers = document.querySelectorAll('.container-content-ZhuYin');

    // 定义不应该出现在行首的标点符号集合
    var punctuations = '!%),.:;>?]}¢¨°·ˇˉ―‖’”…‰′″›℃∶、。〃〉》」』】〕〗〞︶︺︾﹀﹄﹚﹜﹞！＂％＇），．：；？］｀｜｝～￠';

    containers.forEach(function(container) {
        // 在当前容器内获取所有的 ruby 元素
        var rubies = container.querySelectorAll('ruby');

        for (var i = 1; i < rubies.length; i++) {
            var currentRuby = rubies[i];
            var prevRuby = rubies[i - 1];

            // 如果当前的 ruby 元素包含特定的标点符号，则需要进行包裹操作
            if (punctuations.includes(currentRuby.textContent.trim().charAt(0))) {
                // 创建一个新的 div 元素作为包裹容器
                var divWrapper = document.createElement('div');
                divWrapper.style.display = 'inline-block';

                // 将新创建的 div 元素插入到当前 ruby 元素之前
                container.insertBefore(divWrapper, currentRuby);

                // 将前一个 ruby 元素和当前 ruby 元素放入新创建的包裹容器中
                var spaceNode = document.createTextNode(' ');
                divWrapper.appendChild(prevRuby);
                divWrapper.appendChild(spaceNode);
                divWrapper.appendChild(currentRuby);

                // 跳过当前的 ruby 元素，因为它已经与前一个一起处理了
                i++;
            }
        }
    });
}

wrapRubies();