    <View style={styles.container}>

            <View style={styles.placarCounter}>

                <View style={styles.counterOrange}>
                    <PanGestureHandler onGestureEvent={animationCountOrange}>

                        <Animated.Text
                            style={[styles.counterNumber, animatedOrange]}
                            key={counterTeamOrange}
                            entering={FadeIn.duration(200)}
                            exiting={FadeOut.duration(80)}
                        >
                            {counterTeamOrange}
                        </Animated.Text>

                    </PanGestureHandler>
                </View>

                <Text style={styles.counterVS}>VS</Text>

                <View style={styles.counterGreen}>
                    <PanGestureHandler onGestureEvent={animationCountGreen}>

                        <Animated.Text
                            style={[styles.counterNumber, animatedGreen]}
                            key={counterTeamGreen}
                            entering={FadeIn.duration(200)}
                            exiting={FadeOut.duration(80)}
                        >
                            {counterTeamGreen}
                        </Animated.Text>

                    </PanGestureHandler>
                </View>

            </View>

            ###################################################################################
        import TouchableSwipe from 'react-native-touchable-swipe'
            <TouchableSwipe
                    style={styles.counterOrange}
                    onPress={() => { setconterTeamOrange(counterTeamOrange + 1) }}
                    onSwipeUp={() => { setconterTeamOrange(counterTeamOrange + 1) }}
                    onSwipeDown={() => { setconterTeamOrange(counterTeamOrange - 1) }}>

                    <Animated.Text
                        style={styles.counterNumber}
                        key={counterTeamOrange}
                        entering={FadeInDown.duration(200)}
                        exiting={FadeOutUp.duration(80)}>{counterTeamOrange}</Animated.Text>

                </TouchableSwipe>

                {/* </TouchableOpacity> */}

                <Text style={styles.counterVS}>VS</Text>

                <TouchableOpacity style={styles.counterGreen} onPress={() => { setconterTeamGreen(counterTeamGreen + 1) }}>

                    <Animated.Text
                        style={styles.counterNumber}
                        key={counterTeamGreen}
                        entering={FadeInDown.duration(200)}
                        exiting={FadeOutUp.duration(80)}>{counterTeamGreen}</Animated.Text>

                </TouchableOpacity>